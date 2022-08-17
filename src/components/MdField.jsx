import React from 'react';
import styled from 'styled-components';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import rehypeKatex from 'rehype-katex';
import 'katex/dist/katex.min.css';
import {Prism as SyntaxHighlighter} from 'react-syntax-highlighter';
import remarkMath from 'remark-math';
import {solarizedlight} from 'react-syntax-highlighter/dist/esm/styles/prism'

export default function MdField(props) {
  // tomorrow synthwave84 solarizedlight
  return (
    <Container>
      <div>
        <ReactMarkdown
          children={props.text}
          components={{
            code({node, inline, className, children, ...props}) {
            const match = /language-(\w+)/.exec(className || '')
            return !inline && match ? (
            <SyntaxHighlighter
              children={String(children).replace(/\n$/, '')}
              style={solarizedlight}
              language={match[1]}
              PreTag="div"
              {...props}
            />
        ) : (
          <code className={className} {...props}>
            {children}
          </code>
        )
      }
    }} remarkPlugins={[remarkGfm, remarkMath]} rehypePlugins={[rehypeKatex]} />
      </div>
    </Container>
  )
}

const Container = styled.article`
    width: 100%;

    p {
      white-space: pre-line;
      font-size: 1rem;
    }

    div {
        border: none;
        margin: 0;
        height: 90%;
        flex-basis: 10%;
        flex-grow: 1;
        box-sizing: border-box;
        width: 100%;
        resize: none;
        padding: 1rem;
    }
`;
