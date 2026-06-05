"use client"

import {useEffect, useState} from "react";
import SkinView from "@/app/skinview";

export default function Home() {
    type Cape = {
        uuid: string,
        uploader: string,
        name: string,
    }

    const [capes, setCapes] = useState<Cape[]>([]);

    useEffect(() => {
        async function Fetch() {
            const response = await fetch("https://api.capey.app/v1/capes");
            if (!response.ok) return;
            const data = await response.json();
            setCapes(data);
        }

        Fetch();
    }, []);

    return (
        <>
            <h1 className={"capey-text"}>Capey</h1>
            <div className={"capes"}>
                {capes.map((cape: Cape) => (
                    <div key={cape.uuid} className={"cape"}>
                        <SkinView skinUrl={`https://nmsr.jgj52.hu/skin/${cape.uploader}`} capeUrl={`https://api.capey.app/v1/cape/${cape.uuid}`} height={400} width={250} className={"bg-black rounded-lg"} angled />
                        <p>{cape.name}</p>
                    </div>
                ))}
            </div>
        </>
    );
}