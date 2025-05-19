import { Link } from "react-router-dom";
import "./MailboxList.css"; // Assuming styles are here

function MailboxList({ mailboxes }) {
  return (
    <div>
      <h2>All Mailboxes</h2>
      <div className="mailbox-grid">
        {mailboxes.map((mailbox) => (
          <Link key={mailbox._id} to={`/mailboxes/${mailbox._id}`}>
            <div className="mail-box">
              {mailbox._id}
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default MailboxList;
