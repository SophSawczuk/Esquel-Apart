import { useEffect } from "react";

export default function WuBook() {
    useEffect(() => {
        const script = document.createElement('script');
        script.src = "https://wubook.net/js/nebk/bwidget.jgz";
        script.className = "kas_online_reception";
        script.setAttribute("data-wid", "67e8b843-1da8-4fed-abfc-dd1ec4e10957");
        document.body.appendChild(script);

        return () => {
            document.body.removeChild(script);
        };
    }, []);
    
    return(
        <div>
            <p>Reserva</p>
        </div>
    )
}