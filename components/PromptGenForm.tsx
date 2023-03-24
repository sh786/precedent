export const PromptGenForm = () => {
  return (
    <div>
      <h1>Prompt Generator</h1>
      <form>
        <label htmlFor="prompt">Prompt</label>
        <input type="text" name="prompt" id="prompt" />
        <input type="submit" value="Generate" />
      </form>
    </div>
  );
};
