import * as React from 'react';
import EditorJS, { OutputData, BlockToolData, API } from '@editorjs/editorjs';
export interface EditorJsProps {
    enableReInitialize?: boolean;
    tools?: EditorJS.EditorConfig['tools'];
    instanceRef?: (instance: EditorJS) => void;
    onChange?: (api: API, data?: OutputData, index?: number) => void;
    onCompareBlocks?: (newBlocks: BlockToolData | undefined, oldBlocks: BlockToolData | undefined) => boolean;
    index?: number;
}
export declare type Props = Readonly<EditorJS.EditorConfig> & Readonly<EditorJsProps>;
declare class EditorJsContainer extends React.PureComponent<Props> {
    instance?: EditorJS;
    componentDidMount(): void;
    componentDidUpdate(): Promise<void>;
    componentWillUnmount(): void;
    handleChange: (api: API) => Promise<void>;
    initEditor(): void;
    destroyEditor(): Promise<unknown>;
    changeData(data: OutputData): void;
    render(): {};
}
export default EditorJsContainer;
