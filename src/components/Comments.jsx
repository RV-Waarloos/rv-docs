import React from 'react';
import Giscus from '@giscus/react';
import { useColorMode } from '@docusaurus/theme-common';

export default function Comments() {
    const { colorMode } = useColorMode();

    return (
        <div style={{ marginTop: '3rem' }}>
            <Giscus
                id="comments"
                repo="RV-Waarloos/rv-docs"
                repoId="R_kgDOTyh3bQ"
                category="General"
                categoryId="DIC_kwDOTyh3bc4DDfM4"
                mapping="pathname"
                strict="0"
                reactionsEnabled="1"
                emitMetadata="0"
                inputPosition="top"
                theme={colorMode === 'dark' ? 'dark' : 'light'}
                lang="en"
                loading="lazy"
            />
        </div>
    );
}
