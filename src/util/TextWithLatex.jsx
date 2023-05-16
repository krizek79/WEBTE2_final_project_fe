import React from 'react';
import katex from 'katex';

export default function TextWithLatex(props) {

    const text = props.text
    const segments = text.split(/(\$[^$]+\$|\\\([^\\)]+\\\)|\\begin{equation\*}[\s\S]*?\\end{equation\*})/g)

    return (
        <span>
            {segments.map((segment, i) => {
                if (segment.startsWith('$') && segment.endsWith('$')) {
                    const latex = segment.slice(1, -1)
                    return (
                        <span key={i}>
                            <span
                                dangerouslySetInnerHTML={{__html: katex.renderToString(latex)}}
                            ></span>
                        </span>
                    )
                } else if (segment.startsWith('\\') && segment.endsWith('\\')) {
                    const latex = segment.slice(1, -1)
                    return (
                        <span key={i}>
                            <span
                                dangerouslySetInnerHTML={{__html: katex.renderToString(`\\${latex}`)}}
                            ></span>
                        </span>
                    )
                } else if (segment.startsWith('\\begin{equation*}') && segment.endsWith('\\end{equation*}')) {
                    const latex = segment.slice(18, -16)
                    return (
                        <span key={i}>
                            <span
                                dangerouslySetInnerHTML={{__html: katex.renderToString(latex, {displayMode: true})}}
                            ></span>
                        </span>
                    )
                } else {
                    return <span key={i}>{segment}</span>
                }
            })}
        </span>
    )
}
