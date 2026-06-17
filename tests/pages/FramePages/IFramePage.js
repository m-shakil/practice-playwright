import BasePage from "#framework/ui/page/BasePage.js";
import { Label, TextBox, Button } from "#framework/ui/elements/index.js";
import FrameUtils from "#framework/utils/FrameUtils.js";
import { preciseTextLocator } from "#framework/utils/locatorHelper.js";

// Export class
export default class IFramePage extends BasePage {
  constructor(page) {
    super(
      new Label(preciseTextLocator(page, 'An iFrame containing the TinyMCE WYSIWYG Editor'), "unique element of iFrame Page"),
      'iFrame Page'
    );

    // Implement elements 
    this.FrameUtils = new FrameUtils(page);
    this.editor = new TextBox(this.FrameUtils.locatorInFrame(
      ['#mce_0_ifr'],
      '#tinymce'
    ), 'Editor input');
    this.editButton = new Button(preciseTextLocator(page, 'Edit'), 'Edit button');
    this.undoOption = new Button(preciseTextLocator(page, 'Undo'), 'Undo option');
  }

  // Implement methods
  async typeIntoEditor(text) {
    await this.editor.typeText(text);
  }
  
  async getFrameText() {
    return this.FrameUtils.getText(
      ['#mce_0_ifr'],
      '#tinymce'
    )
  }

  async undoChanges() {
    await this.editButton.click();
    await this.undoOption.click();
  }
}
