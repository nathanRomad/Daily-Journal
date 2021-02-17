export const JournalFormComponent = () => {
    JournalEntryComponent()
}

const journalFormContainer = document.querySelector(".journalFormContainer")

const JournalEntryComponent = () => {
    journalFormContainer.innerHTML = `
    <h2>Daily Journal</h2>
        <form class="journalForm">
            <fieldset class="journalFieldset">
                <label for="journalDate">Date of Entry</label>
                <input type="date" name="journalDate" id="journalDate">
                <label for="journalTopic">Topic</label>
                <input class="journalTopicInput"type="Topic" name="journalTopic" id="journalTopic">
                <label for="journalEntry">Journal Entry</label>
                <textarea class="journalEntryInput"type="textarea" name="journalEntry" id="journalEntry"></textarea>
                <label for="moods">What is your mood today?</label>
                <select id="Moods" name="Moods">
                    <option value="Elated">Elated</option>
                    <option value="Happy">Happy</option>
                    <option value="Cheerful">Cheerful</option>
                    <option value="Romantic">Romantic</option>
                    <option value="Whimsical">Whimsical</option>
                    <option value="Lighthearted">Lighthearted</option>
                    <option value="Hopeful">Hopeful</option>
                    <option value="Humorous">Humorous</option>
                    <option value="Calm">Calm</option>
                    <option value="Melancholy">Melancholy</option>
                    <option value="Reflective">Reflective</option>
                    <option value="Gloomy">Gloomy</option>
                    <option value="Angry">Angry</option>
                    <option value="Ominous">Ominous</option>
                    <option value="Depression">Clinical Depression</option>
                    <label for="submitJournal"></label>
                    <input type="submit" value="Submit Journal Entry" formaction="">
                </select>
            </fieldset>
        </form>
    `
}

const eventHub = document.querySelector(".mainContainer")

eventHub.addEventListener("journalStateChanged", event => {

    })