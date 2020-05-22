import React from "react";
import "./App.css";
import styled from "styled-components";
import Button from "@material-ui/core/Button";
import { useClipboard } from "use-clipboard-copy";

const Box = styled.div`
  width: 22rem;
  height: 12rem;
  background: #eaf6ff;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border-radius: 1rem;
  margin: 2rem;
  color: rgba(0, 0, 0, 0.6);
  font-size: 0.88rem;
  line-height: 2rem;
`;
const CopyButton = styled(Button)`
  && {
    width: 18rem;
    height: 3rem;
    background: #5cdccd;
    color: white;
    font-family: "Courier New";
    font-weight: 700;
    font-size: 1rem;
    text-transform: none;
    margin-top: 1rem;
    &:hover {
      background: #48b0a4;
    }
  }
`;
const StyledInput = styled.input`
  && {
    width: 18rem;
    height: 3rem;
    background: #dceefc;
    color: #5cdccd;
    border: none;
    border-radius: 0.25rem;
    font-family: "Courier New";
    font-weight: 700;
    font-size: 1.5rem;
    text-align: center;
  }
`;
const FlexRow = styled.div`
  display: flex;
`;

export default function App() {
  const clipboard = useClipboard({ copiedTimeout: 900 });
  const url = "verme.me";
  return (
    <div className="App">
      <div className="App-header">
        <FlexRow>
          <Box>
            Copying Text of Another Target Element
            <StyledInput ref={clipboard.target} value={url} readOnly />
            <CopyButton onClick={clipboard.copy}>Copy to Clipboard</CopyButton>
          </Box>
          <Box>
            Copying Text Imperatively (Without a Target Element)
            <CopyButton onClick={() => clipboard.copy(new Date().toString())}>
              Copy to Clipboard
            </CopyButton>
          </Box>
        </FlexRow>
        <FlexRow>
          <Box>
            Check Copied
            <StyledInput ref={clipboard.target} value={url} readOnly />
            <CopyButton onClick={clipboard.copy}>
              {clipboard.copied ? "Copied to Clipboard!" : "Copy to Clipboard"}
            </CopyButton>
          </Box>
          <Box>
            Check Browser Support
            <StyledInput ref={clipboard.target} value={url} readOnly />
            <CopyButton onClick={clipboard.copy}>
              {clipboard.copied ? "Copied to Clipboard!" : "Copy to Clipboard"}
            </CopyButton>
            {clipboard.isSupported()
              ? "(Supported Browser)"
              : "(Unsupported Browser)"}
          </Box>
        </FlexRow>
      </div>
    </div>
  );
}
