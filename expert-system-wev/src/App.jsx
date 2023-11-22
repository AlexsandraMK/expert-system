import "./App.css";
import AppStore from "./Components/AppStore";
import { Content } from "./Components/Content";
import { DialogModal } from "./Components/Modal";
import { NavPanel } from "./Components/NavPanel";
import { TopLine } from "./Components/TopLine";
import { Outlet } from "react-router-dom";
import { observer } from "mobx-react";
import { StyledButton } from "./Components/Button";

const App = observer(() => {
  return (
    <Content>
      <TopLine />
      <NavPanel
        links={[
          { to: "patient", text: "Пациент" },
          { to: "project", text: "Проект" },
          { to: "user", text: "Пользователь" },
          { to: "protocol", text: "Протокол" },
        ]}
      />

      <div>
        <Outlet />
      </div>
      {AppStore.showProtocol && (
        <DialogModal onCloseClick={AppStore.closeProtocol}>
          <DialogModal.Header> Полученный протокол </DialogModal.Header>
          <DialogModal.Body><div>
            Был вызван протокол - Протокол</div></DialogModal.Body>
          <DialogModal.Footer><StyledButton onClick={AppStore.closeProtocol}>Ок</StyledButton></DialogModal.Footer>
        </DialogModal>
      )}
    </Content>
  );
});

export default App;
