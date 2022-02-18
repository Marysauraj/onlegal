import { useRouter } from "next/router";
import { useEffect } from "react";

export const useShowPrompt = (isFormDirty) => {
    const router = useRouter();

    useEffect(() => {
        const warningText =
        "Deseas abandonar la página? Se perderán los cambios realizados.";

        const handleWindowClose = (e) => {
            if (!isFormDirty) return;
            e.preventDefault();
            return (e.returnValue = warningText);
        };

        const handleBrowseAway = () => {
            if (!isFormDirty) return;
            if (window.confirm(warningText)) return;

            router.events.emit("routeChangeError");
            throw "routeChange aborted.";
        };
        window.addEventListener("beforeunload", handleWindowClose);
        router.events.on("routeChangeStart", handleBrowseAway);

        return () => {
            window.removeEventListener("beforeunload", handleWindowClose);
            router.events.off("routeChangeStart", handleBrowseAway);
        };
        
    }, [isFormDirty]);
}
 
