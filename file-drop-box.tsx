import React from "react";
import styled from "@emotion/styled";
import { DropTargetSpec, DropTargetCollector } from "react-dnd";

const Box = styled.div`
    background-color: lightgray;
    min-height: 300px;
    width: auto;
`;

export const FileDropBox: React.FC = () => (
    <Box>
        drop your stuff here, family
    </Box>
);
