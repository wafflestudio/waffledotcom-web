import NextImage, { ImageProps } from "next/image";
import { ComponentProps } from "react";

export default function Image(props: ImageProps) {
  if (typeof props.src === "string" && props.src.endsWith(".svg")) {
    const objectProps: ComponentProps<"object"> = {
      className: props.className,
      width: props.width,
      height: props.height,
      style: props.style,
    };
    return (
      <object data={props.src} type="image/svg+xml" {...objectProps}></object>
    );
  } else {
    return <NextImage {...props} />;
  }
}
