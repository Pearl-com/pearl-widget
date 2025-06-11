import React, { useRef } from "react";

export interface PearlWidgetProps {
    apiKey?: string;
    mode?: string; // Use one the available mods: expert, pearl-ai, pearl-ai-verified, pearl-ai-expert
}

export const PearlWidget = (props: PearlWidgetProps) => {
  const iframeRef = useRef<HTMLIFrameElement>(null);
  const widgetOrigin = 'https://www.pearl.com';

  //Inits chat when iframe loads
  const handleLoad = () => {
    if (iframeRef.current && props?.apiKey && props?.mode) {
      iframeRef.current?.contentWindow?.postMessage(
         {
            type: 'init',
            payload: {accessKey: props.apiKey, mode: props.mode}
        },
        widgetOrigin
      );
    }
  };

  return (
    <iframe
        title="Pearl Widget"
        style={{ width: "100%", height: "100%", border: "none" }}
        src={`${widgetOrigin}/api/widget`}
        ref={iframeRef}
        onLoad={handleLoad}
    />
  );
}
