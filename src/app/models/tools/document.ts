export class Document {
    /*
    type =  models.CharField(choices=DOCUMENT_TYPE_CHOICES, max_length=10)
    title = models.CharField(max_length=255)
    author = models.ForeignKey(User, on_delete=models.CASCADE)
    link = models.CharField(max_length=255)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_by = models.ForeignKey(User, on_delete=models.CASCADE, null=True, related_name="updated_by")
    updated_at = models.DateTimeField(auto_now=True)
    status = mo
    */
    type: string = "";
    title: string = "";
    author: number = 0;
    link: string = "";
    status: string = "";
    created_at: string = "";
    updated_at: string = "";
    updated_by: number = 0;
}
