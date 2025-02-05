import Popup from "./components/popup/popup.component";
import SimpleTable from "./components/simple-table/simple-table.component";
import { CreateReferral } from "./create-referral";

const HomePage = async () => {
  return (
    <div>
      <h1 className="text-4xl font-bold text-center mt-8">
        Welcome to Referral Builder App
      </h1>
      <p className="text-center mt-4 mb-4">Automated referral creation </p>

      <CreateReferral />
      <Popup title="Referral Builder" />
      <SimpleTable />
    </div>
  );
};

export default HomePage;
