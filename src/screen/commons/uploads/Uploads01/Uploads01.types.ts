import { ChangeEvent, RefObject } from "react";

export interface IUploads01Props {
  fileUrl?: string;
  index?: number;
  onChangeFiles: any;
  // onChangeFileUrls: (fileUrl: string, index: number) => void;
}

export interface IUploads01UIProps {
  fileRef?: RefObject<HTMLInputElement>;
  images?: string;

  openCamara: () => void;
  onChangeFile?: ((event: ChangeEvent<HTMLInputElement>) => void) | undefined;
}
