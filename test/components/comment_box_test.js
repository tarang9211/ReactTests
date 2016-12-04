import { renderComponent, expect } from '../test_helper';
import CommentBox from '../../src/components/comment_box';

describe('Comment Box', () => {
  let component;

  beforeEach(() => {
      component = renderComponent(CommentBox);
  });

  it('should exist', () => {
    expect(component).to.exist;
  })

  it('should have the appropriate class', () => {
    expect(component).to.have.class('comment-box');
  });
});
