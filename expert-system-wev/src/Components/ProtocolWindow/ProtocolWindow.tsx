import { DialogModal } from "../Modal";
import AppStore from "../../Stores/AppStore";
import { StyledButton } from "../Button";
import { ProtocolType } from "../Types/ProtocolType";
import { StyledConteiner } from "../Container";

export let ProtocolWindow: React.FC<{}> = () => {
  return (
    <DialogModal onCloseClick={AppStore.closeProtocol}>
      <DialogModal.Header> Полученный протокол </DialogModal.Header>
      <DialogModal.Body>
        <StyledConteiner fd="column">
        <h3>Были вызваны протоколы:</h3>
          {AppStore.protocols.map((protocol: ProtocolType) => {
            return (
              <>
                <h4>{protocol.name}</h4>
                <p>{protocol.reaction}</p>
              </>
            );
          })}
        </StyledConteiner>
      </DialogModal.Body>
      <DialogModal.Footer>
        <StyledButton onClick={AppStore.closeProtocol}>Ок</StyledButton>
      </DialogModal.Footer>
    </DialogModal>
  );
};
