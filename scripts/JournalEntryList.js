import { useJournalEntries } from "./JournalDataProvider.js"
import { JournalEntryComponent } from "./JournalEntry.js"

const journalEntryContainer = document.querySelector(".journalEntryContainer")

export const EntryListComponent = () => {
    debugger
    let journalEntryHTMLrepresentation = ""
    const entries = useJournalEntries()
    for (const entry of entries) {
        journalEntryHTMLrepresentation += JournalEntryComponent(entry)
    }
    journalEntryContainer.innerHTML += `
        <h2>Journal Entries</h2>
        ${journalHTMLrepresentation}
        `
}