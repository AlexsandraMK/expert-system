import { DialogModal } from "../Modal";
import AppStore from "../../Stores/AppStore";
import { StyledButton } from "../Button";
import { ProtocolType } from "../Types/ProtocolType";

export let ProtocolWindow: React.FC<{}> = () => {
  return (
    <DialogModal onCloseClick={AppStore.closeProtocol}>
      <DialogModal.Header> Полученный протокол </DialogModal.Header>
      <DialogModal.Body>
        <div>
          Были вызваны протоколы:
          {AppStore.protocols.map((protocol: ProtocolType) => {
            return (
              <div>
                <p>{protocol.name}</p>
                <p>{protocol.reaction}</p>
              </div>
            );
          })}
        </div>
      </DialogModal.Body>
      <DialogModal.Footer>
        <StyledButton onClick={AppStore.closeProtocol}>Ок</StyledButton>
      </DialogModal.Footer>
    </DialogModal>
  );
};
