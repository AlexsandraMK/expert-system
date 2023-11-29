import "./App.css";
import AppStore from "./Stores/AppStore";
import { Content } from "./Components/Content";
import { NavPanel } from "./Components/NavPanel";
import { TopLine } from "./Components/TopLine";
import { Outlet } from "react-router-dom";
import { observer } from "mobx-react";
import { ProtocolWindow } from "./Components/ProtocolWindow/ProtocolWindow";

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
      {AppStore.showProtocol && <ProtocolWindow/>}
    </Content>
  );
});

export default App;
