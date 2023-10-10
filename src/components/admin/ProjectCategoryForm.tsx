export default function ProjectCategoryForm() {
  return (
    <form>
      <div>Toggle Button for order: Manual or Auto</div>
      <div className="form-group">
        <label htmlFor="name">Name</label>
        <input type="text" className="form-control" />
      </div>
      <div className="form-group">
        <label htmlFor="description">Description</label>
        <textarea className="form-control" />
      </div>
    </form>
  );
}
