import { createContext } from 'react';

import SHOP_DATA from './collections';

var CollectionsContext = createContext(SHOP_DATA);

export default CollectionsContext;