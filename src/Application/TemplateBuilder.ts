import { SDK } from "../../typings/miro";

export class TemplateBuilder {
  protected miroSDK: SDK.Root;
  public readonly columns = 3
  public readonly rows = 1
  static readonly RECTANGLE = 1

  public readonly activitiesShape = {
    type: 'SHAPE',
    text: 'Activities',
    x: 0,
    y: 0,
    width: 200,
    height: 100,
    style: {
      borderWidth: 0,
      backgroundColor: '#A6CCF5'
    }
  }
  public readonly complexitiesShape = {
    type: 'SHAPE',
    text: 'Complexities',
    x: 201,
    y: 0,
    width: 180,
    height: 100,
    style: {
      borderWidth: 0,
      backgroundColor: '#F5A6CC'
    }
  }
  public readonly variationsShape = {
    type: 'SHAPE',
    text: 'Variations',
    x: 550,
    y: 0,
    width: 500,
    height: 100,
    style: {
      borderWidth: 0,
      backgroundColor: '#CCF5A6'
    }
  }

  public readonly templateFrame = {
    type: 'FRAME',
    title: 'Vertical Slicing',
    x: 0,
    y: 450,
    width: 1700,
    height: 1200,
  }

  public readonly exampleImage = {
    type: 'IMAGE',
    url: 'https://miro.medium.com/max/952/1*ovDaIByqCJLsp2b45suvYQ.png',
    x: 330,
    y: 520,
    scale: 2
  }

  public readonly slicingStepsImage = {
    type: 'IMAGE',
    url: 'https://miro.medium.com/max/1400/1*F9zP3SyfjgI-W4EyMCB-Dw.png',
    x: -500,
    y: 0,
    scale: 0.5
  }

  public readonly blogLinks = {
    type: 'TEXT',
    text: 'https://abrahamvallez.medium.com/vertical-slicing-i-desaprende-lo-que-sabes-sobre-user-stories-y-pon-el-foco-en-desarrollo-b859c5827326',
    x: -500,
    y: 150
  }

  constructor(miroSDK: SDK.Root) {
    this.miroSDK = miroSDK;
  }

  public async build() {
    await this.miroSDK.board.widgets.create([
      this.templateFrame,
      this.activitiesShape,
      this.complexitiesShape,
      this.variationsShape,
      this.exampleImage,
      this.slicingStepsImage,
      this.blogLinks
    ])
  }
}
