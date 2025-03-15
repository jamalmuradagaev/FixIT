import { useEffect, useRef } from "react";
import * as VKID from '@vkid/sdk';
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../store/store";
import { setUserInfo } from "../store/userSlice";

declare global {
    interface Window {
        VKIDSDK?: any;
    }
}

const VKIDLogin = () => {
    const userInfo = useSelector((state: RootState) => state.user)
    console.log(userInfo)
    const containerRef = useRef<HTMLDivElement | null>(null);
    const scriptLoaded = useRef(false);
    const dispatch = useDispatch<AppDispatch>()

    useEffect(() => {
        if (scriptLoaded.current) return
        scriptLoaded.current = true
        const script = document.createElement("script");
        script.src = "http://unpkg.com/@vkid/sdk/dist-sdk/umd/index.js";
        script.async = true;
        script.onload = () => {
            VKID.Config.init({
                app: 53257228,
                redirectUrl: "http://localhost",
                responseMode: VKID.ConfigResponseMode.Callback,
                source: VKID.ConfigSource.LOWCODE,
                scope: "wall",
            });

            const oneTap = new VKID.OneTap();

            if (containerRef.current) oneTap
                .render({ container: containerRef.current, showAlternativeLogin: true, styles: { width: 50, height: 50, borderRadius: 15 } })
                .on(VKID.WidgetEvents.ERROR, vkidOnError)
                .on(VKID.OneTapInternalEvents.LOGIN_SUCCESS, (payload: any) => {
                    const { code, device_id: deviceId } = payload;

                    VKID.Auth.exchangeCode(code, deviceId)
                        .then(vkidOnSuccess)
                        .catch(vkidOnError);
                });
        }

        document.body.appendChild(script);

        return () => {
            document.body.removeChild(script);
        };
    }, []);

    function vkidOnSuccess(data: any) {
        VKID.Auth.userInfo(data.access_token)
            .then(userInfo => dispatch(setUserInfo(userInfo)))
    }

    function vkidOnError(error: any) {
        console.error("VKID Error:", error);
    }

    return <div id="vkid-container" ref={containerRef}></div>
};

export default VKIDLogin;
