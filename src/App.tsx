import { Button } from "@/components/ui/button";

import "./styles/globals.css";

const App = () => {
  return (
    <div className="flex flex-col">
      <Button variant="destructive" size="lg">
        destructive Click here
      </Button>
      <Button variant="secondary" size="lg">
        secondary Click here
      </Button>
    </div>
  );
};

export default App;
