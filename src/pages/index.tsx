import type { FC } from "react";
import { useEffect } from "react";
import { getLoggedUserId } from '../utils/getLoggedUserId';
import useUsersContext from '../hooks/useUsersContext';

import ConversationsProvider from "../containers/ConversationsProvider";
import ConversationsPage from "./ConversationsPage";

const Home: FC = () => {
  const { setCurrentUser } = useUsersContext();

  useEffect(() => {
    const loggedUserId = getLoggedUserId();
    setCurrentUser(loggedUserId);
  }, []);

  return (
    <div>
      <ConversationsProvider>
        <ConversationsPage />
      </ConversationsProvider>
    </div>
  );
};

export default Home;