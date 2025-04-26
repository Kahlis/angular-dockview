import {
  Component,
} from '@angular/core';
import { GroupPanelPartInitParameters, IContentRenderer } from "dockview-core";
import { Container, Graphics } from "pixi.js";
import { IContentResizable } from "../registry/views-regisry.interfaces";
import {
  BoxGeometry,
  Mesh,
  MeshBasicMaterial,
  PerspectiveCamera,
  Scene,
  WebGLRenderer as Renderer3D
} from "three";
import { WebGLRenderer as Renderer2D, Text } from "pixi.js";
import {GlobalDirectives} from "../../global.config";


@Component({
  selector: 'content',
  templateUrl: './game-view.component.html',
  styleUrl: './game-view.component.css',
  imports: [
    ...GlobalDirectives
  ]
})
export class GameViewComponent implements IContentRenderer, IContentResizable {
  public static windowName: string = 'GameView';
  private readonly _element: HTMLElement;
  private readonly pixiRenderer?: Renderer2D;
  private threeRenderer?: Renderer3D;
  private threeCamera?: PerspectiveCamera;

  get element(): HTMLElement {
    return this._element;
  }

  get app(): Renderer2D {
    return this.pixiRenderer!;
  }

  constructor() {
    this._element = document.createElement('div');
    this.pixiRenderer = new Renderer2D();
    const _ = this.initializeApp();
  }

  private async initializeApp() {
    // Initialize window dimensions
    let WIDTH = window.innerWidth;
    let HEIGHT = window.innerHeight;

    // === THREE.JS SETUP ===
    // Create Three.js WebGL renderer with antialiasing and stencil buffer
    this.threeRenderer = new Renderer3D({ antialias: true, stencil: true });

    // Configure Three.js renderer size and background color
    this.threeRenderer.setSize(WIDTH, HEIGHT);
    this.threeRenderer.setClearColor(0xdddddd, 1); // Light gray background

    // Create Three.js scene
    const scene = new Scene();

    // Set up perspective camera with 70° FOV
    this.threeCamera = new PerspectiveCamera(70, WIDTH / HEIGHT);

    this.threeCamera.position.z = 50; // Move camera back to see the scene
    scene.add(this.threeCamera);

    // Create a simple cube mesh
    const boxGeometry = new BoxGeometry(30, 30, 30);
    const basicMaterial = new MeshBasicMaterial({ color: 0x0095dd }); // Blue color
    const cube = new Mesh(boxGeometry, basicMaterial);

    scene.add(cube);

    // === PIXI.JS SETUP ===
    // Create PixiJS renderer that shares the WebGL context with Three.js
    // Initialize PixiJS renderer with shared context
    await this.pixiRenderer!.init({
      backgroundColor: 0x000000,
      antialias: true,
      context: this.threeRenderer.getContext() as WebGL2RenderingContext,
      width: WIDTH,
      height: HEIGHT,
      clearBeforeRender: false, // Don't clear the canvas as Three.js will handle that
    });

    // Create PixiJS scene graph
    const stage = new Container();

    // Create a yellow rounded rectangle UI element
    const uiLayer = new Graphics().roundRect(20, 80, 300, 300, 20).fill(0xffff00);

    // Add text overlay
    const text = new Text({ text: 'Pixi and Three.js', style: { fontFamily: 'Arial', fontSize: 24, fill: 'black' } });

    uiLayer.addChild(text);
    stage.addChild(uiLayer);

    // Animation loop
    function loop(threeRenderer: Renderer3D, threeCamera: PerspectiveCamera, pixiRenderer: Renderer2D)
    {
      // Rotate cube continuously
      cube.rotation.x += 0.01;
      cube.rotation.y += 0.01;

      // Animate UI layer position using sine wave
      uiLayer.y = ((Math.sin(Date.now() * 0.001) + 1) * 0.5 * WIDTH) / 2;

      // Render Three.js scene
      threeRenderer.resetState();
      threeRenderer.render(scene, threeCamera);

      // Render PixiJS scene
      pixiRenderer.resetState();
      pixiRenderer.render({ container: stage });

      // Continue animation loop
      requestAnimationFrame(() => loop(threeRenderer, threeCamera, pixiRenderer));
    }

    // Start animation loop
    requestAnimationFrame(() => loop(this.threeRenderer!, this.threeCamera!, this.pixiRenderer!));

    this._element.appendChild(this.threeRenderer.domElement);
  }

  public resize(width: number, height: number) {
    // Update Three.js renderer
    if(this.threeRenderer) {
      this.threeRenderer.setSize(width, height);
    }

    // Update Three.js camera aspect ratio so it renders correctly
    if(this.threeCamera) {
      this.threeCamera.aspect = width / height;
      this.threeCamera.updateProjectionMatrix();
    }

    // Update PixiJS renderer
    if(this.pixiRenderer) {
      this.pixiRenderer.canvas.width = width;
      this.pixiRenderer.canvas.height = height;
    }
  }

  init(_: GroupPanelPartInitParameters): void {
    //
  }
}
