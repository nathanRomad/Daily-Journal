export const useJournalEntries = () => {
    const sortedByDate = entries.sort(
        (currentEntry, nextEntry) =>
            Date.parse(currentEntry.date) - Date.parse(nextEntry.date))
    return sortedByDate
}

let entries = [] // useJournalEntries refers to 'entries' in order to sort and use the JournalEntries.
export const getEntries = () => {
    return fetch("http://localhost:8088/entries") // Fetch from the API
    .then(response => response.json())  // Parse as JSON
    .then(parsedEntries => {
        entries = parsedEntries
    }) // store returned data in 'entries'
}

const eventHub = document.querySelector(".mainContainer")
const dispatchStateChangeEvent = () => {
    // debugger
    eventHub.dispatchEvent(new CustomEvent("journalStateChanged"))
}

export const saveNote = (note) => {
    return fetch('http://localhost:8088/entries', {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(note)
    })
    .then(getEntries)
    .then(dispatchStateChangeEvent)
}

// dispatch customEvent needs gone over
// saveNote has not been tested.. need to add a save note button and update eventListener
