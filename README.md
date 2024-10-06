# Prompt+

Prompt+ is a Chrome extension that allows you to easily extract text from the active tab and choose actions such as summarizing, explaining, or performing sentiment analysis. It is designed to simplify your workflow, reducing friction in generating prompts that can be fed directly into your language model (LLM) for further processing.



## Features

- **Customizable Prompts**: Choose from various actions like summarize, explain, or analyze sentiment.
- **Full-Page Text Extraction**: Capture the entire text content of the active web page with a single click.
- **LLM-Ready Input**: Automatically combines your chosen prompt with the extracted text, creating a formatted input ready to paste into your preferred LLM interface.



## Installation

1. **Clone the Repository:**
    - To clone this repository, you can use the following command in your terminal:

    ```bash
    git clone https://github.com/RafaelCarreres/chrome-instant-screenshot.git
    ```

3. **Load the Extension in Chrome:**

    - Open Chrome and navigate to ```chrome://extensions/```
    - Enable Developer mode by toggling the switch in the top-right corner.
    - Click "Load unpacked" and select the directory where you cloned the repository.



## Usage

- After installing the extension, click the extension icon in your Chrome toolbar.

- A pop-up will appear with buttons to Summarize, Explain, or Analyze the Sentiment of the text on the active page.

- Click on your desired action and the result will be automatically copied to your clipboard, ready for you to paste into your LLM prompt.



## Permissions

The extension requires the following permissions:

- Active Tab: To extract text from the active tab.

- Scripting: To inject JavaScript for text extraction.

- Clipboard Write: To copy the formatted text to the clipboard.



## Privacy

Prompt+ respects your privacy by minimizing the required permissions. The extension does not track your browsing activity or collect any data.



## License

This project is licensed under the MIT License.
