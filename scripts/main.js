import { JournalFormComponent } from "./JournalForm.js"
import { getEntries, useJournalEntries } from "./JournalDataProvider.js"
import { EntryListComponent } from "./JournalEntryList.js"

JournalFormComponent()
useJournalEntries()
EntryListComponent()


//test
// getEntries()