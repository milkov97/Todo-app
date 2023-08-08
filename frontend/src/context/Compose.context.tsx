import React, { ReactNode, FC } from "react";

interface ComposeContextInerface {
  components?: FC<{ children?: ReactNode }>[];
  children?: ReactNode | undefined;
}

export default function ComposeContext(props: ComposeContextInerface) {
  const { components = [], children } = props;

  return (
    <>
      {components.reduceRight((acc, Comp: any) => {
        return <Comp>{acc}</Comp>;
      }, children)}
    </>
  );
}
