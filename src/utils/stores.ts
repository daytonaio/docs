// using nanostore to manage shared state between astro components, see here https://docs.astro.build/en/recipes/sharing-state/

import { atom, map, computed } from "nanostores"


// Allow user to click on a link that direct them to a <details> element, that element will automatically open
export type DetailsState = "closed" | "open"

export type DetailsStateValue = {
    fieldId: string;
    state?: DetailsState;
}

// use map to create KV store that can be updated
export const $detailsStore = map<DetailsStateValue>({fieldId: "", state: "closed"})

// listen to field ID changes, if the fieldId is not empty then set the state to open
$detailsStore.listen((detailsStore, changed) => {
    if(!detailsStore.fieldId == null) {
      return  $detailsStore.setKey("state", "open")
    }
    return $detailsStore.setKey("state", "closed")
})