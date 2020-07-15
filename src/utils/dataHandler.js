export const removeObjectById = (id, objects) => {
  return objects.filter((object) => object.id !== id);
};

export const changeObjectById = (changedObject, objects) => {
  return objects.map((object) => {
    if (object.id === changedObject.id) {
      return changedObject;
    }
    return object;
  });
};

export const removeCommentFromCard = (cardId, commentId, cards) => {
  return cards.map((card) => {
    if (card.id === cardId) {
      card.commentsIds = card.commentsIds.filter(
        (commentId) => commentId !== commentId,
      );
    }
    return card;
  });
};

export const addCommentFromCard = (cardId, commentId, cards) => {
  return cards.map((card) => {
    if (card.id === cardId) {
      card.commentsIds.push(commentId);
    }
    return card;
  });
};
