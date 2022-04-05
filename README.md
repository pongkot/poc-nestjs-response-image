# PoC Nest.js response image

A proof of concept for nestjs response image

## Notes

- Use decorator `@Res` for custome response
- Set response content type is `png` with `res.type('png')`
- Response buffer with `binary` option

## Snippet

```typescript
@Controller()
export class AppController {
  constructor(private readonly appService: AppService) { }

  @Get('image/:filename')
  getImage(
    @Param('filename')
    filename: string,
    @Res()
    response: Response,
  ): void {
    const buffer = this.appService.getImage(filename)
    response.type('png')
    response.end(buffer, 'binary')
  }
}
```