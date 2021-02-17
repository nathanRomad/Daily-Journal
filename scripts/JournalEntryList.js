import { getEntries, useJournalEntries } from "./JournalDataProvider.js"
import { JournalEntryComponent } from "./JournalEntry.js"

const journalEntryContainer = document.querySelector(".journalEntryContainer")

export const EntryListComponent = () => {
    getEntries().then(() => {
    let journalEntryHTMLrepresentation = ""
    const arrayOfJournalEntries = useJournalEntries()
    for (const entry of arrayOfJournalEntries) {
        // debugger
        journalEntryHTMLrepresentation += JournalEntryComponent(entry)
    }
    journalEntryContainer.innerHTML += `
        ${journalEntryHTMLrepresentation}
        `
})
}