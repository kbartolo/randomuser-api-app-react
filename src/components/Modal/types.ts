export type ModalProps = {
  onClose?: () => void;
  title?: string;
  children?: any;
  show: boolean;
};

export interface KeyboardEvent {
  key: string;
}
