import IssueStore from "./stores/IssueStore";
import IssueForm from "./components/IssueForm";
import IssueList from "./components/IssueList";

import "./Issues.css";

function App() {
  return (
    <IssueStore>
      <IssueForm />
      <IssueList />
    </IssueStore>
  );
}

export default App;
