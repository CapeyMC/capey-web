"use client"

import { useEffect, useRef } from "react";
import * as skinview3d from "skinview3d";

type props = {
    skinUrl: string,
    capeUrl: string,
    height: number,
    width: number,
    disableControls?: boolean,
    disableZoom?: boolean,
    angled?: boolean,
    hands?: boolean,
    handsOut?: boolean,
    className?: string,
}

export default function SkinView({ skinUrl, capeUrl, height, width, disableControls, disableZoom, angled, hands, handsOut, className }: props) {
    const canvasRef = useRef<HTMLCanvasElement>(null);

    useEffect(() => {
        const viewer = new skinview3d.SkinViewer({
            canvas: canvasRef.current || undefined,
            width: width,
            height: height,
            skin: skinUrl,
            cape: capeUrl,
            enableControls: !disableControls,
        });

        viewer.controls.enableZoom = !disableZoom === undefined ? true : !disableZoom;

        if (angled) {
            viewer.autoRotate = false;

            viewer.fov = 54;

            viewer.playerObject.rotation.y = Math.PI * 1.2;

            viewer.camera.position.set(0, 10, 40);
        }


        if (handsOut) {
            viewer.playerObject.skin.leftArm.rotation.z = 0.15;
            viewer.playerObject.skin.rightArm.rotation.z = -0.15;
        }

        if (hands) {
            viewer.playerObject.skin.leftArm.rotation.x = -0.2;
            viewer.playerObject.skin.rightArm.rotation.x = 0.2;
        }

        return () => viewer.dispose();
    }, [skinUrl, capeUrl, width, height, disableControls, disableZoom, angled, hands, handsOut]);

    return (
        <>
            <canvas ref={canvasRef} className={className} />
        </>
    )
}