export const JournalEntryComponent = (entry) => {
    // debugger
    return `
        <section id="entry--${entry.id}" class="journalEntry">
        <div>Date: ${entry.date}</div><br>
        <div>Topic: ${entry.topic}</div><br>
        <div>Journal Entry: ${entry.journalEntry}</div><br>
        <div>Mood: ${entry.mood}</div><br><br>
        </section>
        `
    }