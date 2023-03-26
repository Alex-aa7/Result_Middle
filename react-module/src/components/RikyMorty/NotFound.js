import { useEffect } from "react";
import { Navigate, useNavigate } from "react-router-dom";

export function NotFound() {
    const navigate=useNavigate();
    const isUser=true;

    useEffect(()=>{
        setTimeout(()=>{
            navigate('/');
        },1000)
    });

    if (!isUser) {
        return <Navigate to={'/'}/>
    }

    return (
    <h1>404 Page Not Found</h1>
    );
}