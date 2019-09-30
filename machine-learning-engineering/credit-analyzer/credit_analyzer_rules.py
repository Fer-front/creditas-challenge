from enum import Enum


class Approval(Enum):
    APPROVED = 'Approved'
    DENIED = 'Denied'
    NOT_DECIDED = 'Could not automatically decide. An analyst should review this case'


def review(prob_approval):
    if prob_approval < .40:
        return Approval.DENIED
    elif prob_approval >= .65:
        return Approval.APPROVED
    else:
        return Approval.NOT_DECIDED
