import { useContext } from 'react';
import ConversationsContext from '../contexts/ConversationsContext';

const useConversationsContext = () => useContext(ConversationsContext);

export default useConversationsContext;
