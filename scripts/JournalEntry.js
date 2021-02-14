export const JournalEntryComponent = (entry) => {
    return `
        <section id="entry--${entry.id}" class="journalEntry">
        <div>Date: ${entry.date}</div>
        <div>Topic: ${entry.topic}</div>
        <div>Journal Entry: ${entry.journalEntry}</div>
        <div>Mood: ${entry.mood}</div>        
        </section>
        `
    }