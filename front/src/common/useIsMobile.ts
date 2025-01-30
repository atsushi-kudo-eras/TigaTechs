import { useEffect, useState } from "react";

const useIsMobile = () => {
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const userAgent = navigator.userAgent || '';
        setIsMobile(/Mobile|Android|iP(hone|od|ad)/i.test(userAgent));
    }, []);

    return isMobile;
};

export default useIsMobile;
