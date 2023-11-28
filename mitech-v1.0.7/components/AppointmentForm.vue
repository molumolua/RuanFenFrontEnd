<template>
    <div class="business-solution-form-wrap me-auto ms-auto">
        <div class="contact-title text-center section-space--mb_40">
            <h5 class="mb-10">Book appointment</h5>
            <p class="text">It's out pleasure to have a chance to cooperate.</p>
        </div>
        <form method="post">
            <div class="contact-form__two">
                <div class="contact-inner">
                    <input name="name" type="text" placeholder="Name *">
                </div>
                <div class="contact-inner">
                    <input name="email" type="email" placeholder="Email *">
                </div>
                <div class="contact-select">
                    <div class="form-item contact-inner">
                        <span class="inquiry">
                    <select name="inquiry" class="select-item">
                        <option value="Your inquiry about">Your inquiry about</option>
                        <option value="General Information Request">General Information Request</option>
                        <option value="Partner Relations">Partner Relations</option>
                        <option value="Careers">Careers</option>
                        <option value="Software Licencing">Software Licencing</option>
                    </select>
                </span>
                    </div>
                </div>
                <div class="comment-submit-btn text-center">
                    <button class="ht-btn ht-btn-md" type="submit">Submit</button>
                </div>
            </div>
        </form>
    </div>
</template>