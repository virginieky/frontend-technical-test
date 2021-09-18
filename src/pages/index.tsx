import type { FC } from "react"

import ConversationsProvider from "../containers/ConversationsProvider";
import ConversationsPage from "./ConversationsPage";

const Home: FC = () => {
  return (
    <div>
      <ConversationsProvider>
        <ConversationsPage />
      </ConversationsProvider>
    </div>
  )
}

export default Home