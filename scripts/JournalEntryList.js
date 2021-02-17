import { useJournalEntries } from "./JournalDataProvider.js"
import { JournalEntryComponent } from "./JournalEntry.js"

const journalEntryContainer = document.querySelector(".journalEntryContainer")

export const EntryListComponent = () => {
    // debugger
    let journalEntryHTMLrepresentation = ""
    const arrayOfJournalEntries = useJournalEntries()
    for (const entry of arrayOfJournalEntries) {
        journalEntryHTMLrepresentation += JournalEntryComponent(entry)
    }
    journalEntryContainer.innerHTML += `
        <h2>Journal Entries</h2>
        ${journalEntryHTMLrepresentation}
        `
}