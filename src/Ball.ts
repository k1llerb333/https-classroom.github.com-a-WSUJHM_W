import * as gfx from 'gophergfx'

export class Ball extends gfx.SphereMesh
{
    public velocity: gfx.Vector3;
    private shadow: gfx.SphereMesh;

    constructor(radius = 1, subdivisions=3)
    {
        // Call the base class constructor
        super(radius, subdivisions);

        // Initialize member variables
        this.velocity = new gfx.Vector3();

        // Set the initial position so the bottom edge is touching the ground
        this.position.y = radius/2;

        // Set the material color
        const ballMaterial = new gfx.GouraudMaterial();
        ballMaterial.ambientColor.set(0.335, 0.775, 0.891);
        ballMaterial.diffuseColor.set(0.335, 0.775, 0.891);
        ballMaterial.specularColor.set(0.3, 0.3, 0.3);
        ballMaterial.shininess = 10;
        this.material = ballMaterial;

        // Create a shadow that will follow under the ball
        this.shadow = new gfx.SphereMesh(radius, subdivisions);
        this.shadow.position.y = -this.position.y + 0.005;
        this.shadow.scale.y = 0.01;
        this.add(this.shadow);

        // Set the shadow to be semi-transparent
        const shadowMaterial = new gfx.UnlitMaterial();
        shadowMaterial.color.set(0, 0, 0, 0.5);
        this.shadow.material = shadowMaterial;

    }

    update(deltaTime: number): void
    {
        // Add your code here
    }

    reset()
    {
       // Add your code here
    }
}