import { RemoveEspaceTextPipe } from './remove-espace-text.pipe';

describe('RemoveEspaceTextPipe', () => {
  let pipe = new RemoveEspaceTextPipe();

  it('create an instance', () => {
    expect(pipe).toBeTruthy();
  });

  it('create an instance', () => {
    const text = 'Hola mundo';
    const newText = pipe.transform(text);
    expect(newText.length).toBe(9);
  });
});
